import React from 'react';
import { Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import './style.scss'
const Funfact = ({ className }) => {
    return (
        <Grid className={className ? `${className} funfactArea` : 'funfactArea'}>
            <Grid container className='container' spacing={4}>
                <Grid xs={12} item>
                    <Grid className="funfactWrap">
                        <Grid className="funfactLeft">
                            <i className="flaticon-emoji"></i>
                            <div className="contentFanfact">
                                <span>99% Customar</span>
                                <h3>Satisfiction</h3>
                            </div>
                        </Grid>
                        <ul className="funfactItems">
                            <li className="funfactItem">
                                <h3>
                                    <CountUp
                                        className="customCount"
                                        start={0}
                                        end={20165}
                                        duration={5}
                                        useEasing={true}
                                    />
                                    <span>+</span>
                                </h3>
                                <p>Amazing Products</p>
                            </li>
                            <li className="funfactItem">
                                <h3>
                                    <CountUp
                                        className="customCount"
                                        start={0}
                                        end={32567}
                                        duration={5}
                                        useEasing={true}
                                    />
                                </h3>
                                <p>Total Item Sold</p>
                            </li>
                            <li className="funfactItem">
                                <h3>
                                    <span>$</span>
                                    <CountUp
                                        className="customCount"
                                        start={0}
                                        end={603598}
                                        duration={5}
                                        useEasing={true}
                                    />
                                </h3>
                                <p>Total Earning</p>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Funfact;
