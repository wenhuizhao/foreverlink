import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
import Pagination from 'components/Pagination'
import './style.scss'

// images 
import image1 from 'images/products/img1.jpg'
import image2 from 'images/products/img2.jpg'
import image3 from 'images/products/img3.jpg'
import image4 from 'images/products/img4.jpg'
import image5 from 'images/products/img5.jpg'
import image6 from 'images/products/img6.jpg'

const products = [
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 1
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 2
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 3
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 4
    },
    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 5
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 10
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 11
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 12
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 6
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 7
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 8
    },
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 9
    },
    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 13
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 15
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 14
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 16
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 21
    },
    {
        name: 'Lavelo - Wedding Wordpress Theme',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 22
    },

    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 23
    },

    {
        name: 'Neon - Multipurpose Wordpress Theme',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 24
    },
    {
        name: 'Canlye - Multipurpose Wordpress Theme',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 17
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 18
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 19
    },
    {
        name: 'Sportyy - Gym & Sports Theme',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 20
    },
]


class Portfolio extends Component {
    state = {
        pageOfItems: [],
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <Grid container spacing={4} >
                {
                    this.state.pageOfItems.map((product, i) => (
                        <Grid key={i} item sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))
                }
                < Grid xs={12} item>
                    <Pagination
                        rowShow={8}
                        items={products}
                        onChangePage={this.onChangePage}
                    />
                </Grid >
            </Grid >
        )
    }
}
export default Portfolio;
