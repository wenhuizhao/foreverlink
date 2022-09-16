import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bgImg from 'images/bg/hero.png'
import heroImg from 'images/hero-img.png'

const heros = {
    title: 'The Best Template To Create Your',
    titleColor: 'Digital Marketplace',
    text: 'We make selling digital products a breeze. Easy Digital Downloads is simple to use and free to download.',
    btn: 'Explore Templates',
    btn2: 'Get Started Now',
    bg: bgImg,
    heroImg: heroImg
}

const Hero = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <Grid
            style={{ background: `url(${heros.bg}) no-repeat center center / cover` }}
            className="heroArea">
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container">
                <Grid item lg={7} md={7}>
                    <Grid className="heroContent">
                        <h2>{heros.title} <span>{heros.titleColor}</span></h2>
                        <p>{heros.text}</p>
                        <ul>
                            <li><Button className="btn">{heros.btn}</Button></li>
                            <li><Button className="btn btnNormal">{heros.btn2}</Button></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="heroImg">
                <img src={heros.heroImg} alt="" />
                <Button
                    onClick={() => setOpen(true)}>
                    <i className="fa fa-play"></i>
                </Button>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>
    );
}

export default injectIntl(Hero);