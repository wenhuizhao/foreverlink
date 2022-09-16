import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import SectionTitle from 'components/SectionTitle/Loadable'
import 'components/HomeMain/NewlyAddProducts/style.scss'
import './style.scss'


// images 
import image1 from 'images/products/products/img1.jpg'
import image2 from 'images/products/products/img2.jpg'
import image3 from 'images/products/products/img3.jpg'
import image4 from 'images/products/products/img4.jpg'
import image5 from 'images/products/products/img5.jpg'
import image6 from 'images/products/products/img6.jpg'
import image7 from 'images/products/products/img7.jpg'
import image8 from 'images/products/products/img8.jpg'
import image9 from 'images/products/products/img9.jpg'
import image10 from 'images/products/products/img10.jpg'
import image11 from 'images/products/products/img11.jpg'
import image12 from 'images/products/products/img12.jpg'

const products = [
    {
        name: 'Audenbarg',
        image: image1,
        id: 1
    },
    {
        name: 'Furnitury',
        image: image2,
        id: 2
    },
    {
        image: image3,
        name: 'Good Day',
        id: 3
    },
    {
        name: 'Neon Jochy',
        image: image4,
        id: 4
    },
    {
        image: image5,
        name: 'Marketitic',
        id: 5
    },
    {
        name: 'Meditouch',
        image: image6,
        id: 6
    },
    {
        image: image7,
        name: 'Lavelo',
        id: 7
    },
    {
        name: 'ConsultAid',
        image: image8,
        id: 8
    },
    {
        image: image9,
        name: 'Coffeeco',
        id: 9
    },
    {
        name: 'Sportytalk',
        image: image10,
        id: 10
    },
    {
        image: image11,
        name: 'BusinessBoss',
        id: 11
    },
    {
        name: 'Analistic',
        image: image12,
        id: 12
    },
    {
        name: 'Audenbarg',
        image: image1,
        id: 13
    },
    {
        name: 'Furnitury',
        image: image2,
        id: 14
    },
    {
        image: image3,
        name: 'Good Day',
        id: 15
    },
    {
        name: 'Neon Jochy',
        image: image4,
        id: 16
    },
    {
        image: image5,
        name: 'Marketitic',
        id: 17
    },
    {
        name: 'Meditouch',
        image: image6,
        id: 18
    },
    {
        image: image7,
        name: 'Lavelo',
        id: 19
    },
    {
        name: 'ConsultAid',
        image: image8,
        id: 20
    },
    {
        image: image9,
        name: 'Coffeeco',
        id: 21
    },
    {
        name: 'Sportytalk',
        image: image10,
        id: 22
    },
    {
        image: image11,
        name: 'BusinessBoss',
        id: 23
    },
    {
        name: 'Analistic',
        image: image12,
        id: 24
    },
]


const HomeTwoNewlyAddProducts = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        rows: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };
    return (
        <Grid className="HomeTwoNewlyAddProductsArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Newly Added Products"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="homeTwoNewProductSlider"
                        {...settings}>
                        {products.map((item, i) => (
                            <Grid
                                key={i}
                                className="newProductWrap">
                                <Button
                                    className="newProductItem"
                                    component={Link}
                                    to={`product-details/${item.id}`}
                                >
                                    <img src={item.image} alt="" />
                                    {item.name}
                                </Button>
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeTwoNewlyAddProducts;
