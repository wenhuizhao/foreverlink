import React from 'react';
import { Grid } from '@material-ui/core'
import Slider from "react-slick";
import SectionTitle from 'components/SectionTitle/Loadable'
import SingleTeam from 'components/SingleTeam/Loadable'
import './style.scss'

// images 
import team1 from 'images/team/img1.jpg'
import team2 from 'images/team/img2.jpg'
import team3 from 'images/team/img3.jpg'
import team4 from 'images/team/img4.jpg'

const teams = [
    {
        image: team1,
        name: 'Angelica Watson',
        desig: 'Director',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin'],
        id: 1
    },
    {
        image: team2,
        name: 'Darothi Clandon',
        desig: 'CEO',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-youtube'],
        id: 2
    },
    {
        image: team3,
        name: 'Robert Simon',
        desig: 'Founder',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin'],
        id: 3
    },
    {
        image: team4,
        name: 'Julia D’Soza',
        desig: 'Director',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-youtube'],
        id: 4
    },
    {
        image: team1,
        name: 'Angelica Watson',
        desig: 'Director',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin'],
        id: 5
    },
    {
        image: team2,
        name: 'Darothi Clandon',
        desig: 'CEO',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-youtube'],
        id: 6
    },
    {
        image: team3,
        name: 'Robert Simon',
        desig: 'Founder',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin'],
        id: 7
    },
    {
        image: team4,
        name: 'Julia D’Soza',
        desig: 'Director',
        social: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-youtube'],
        id: 8
    },
]

const Team = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Grid className="teamArea ptb-104">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title='Our Team'
                        subtitle='Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!'
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="teamSliderWrap"
                        {...settings}>
                        {teams.map((item, i) => (
                            <Grid key={i} className="teamWrap">
                                <SingleTeam
                                    image={item.image}
                                    name={item.name}
                                    designation={item.desig}
                                    social={item.social}
                                />
                            </Grid>
                        ))}

                    </Slider>
                </Grid>

            </Grid>
        </Grid >
    );
}

export default Team
