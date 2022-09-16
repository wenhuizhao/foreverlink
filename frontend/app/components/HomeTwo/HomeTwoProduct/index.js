import React, { useState, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Tab, Tabs } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
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
        name: 'Canlye - Multipurpose React Template',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 1
    },
    {
        name: 'Sportyy - Gym & Sports Template',
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
        name: 'Sportyy - Gym & Sports Template',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 4
    },
    {
        name: 'Neon - Multipurpose Wordpress Template',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 5
    },
    {
        name: 'Lavelo - Wedding Wordpress Template',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 6
    },
]

const HomeTwoProduct = () => {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <Grid className="productArea pb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Our Exclusive Products"
                        subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            root: 'homeTwoProductTabs',
                            flexContainer: 'productTabContainer',
                            indicator: 'productTabIndicator'
                        }}
                    >
                        <Tab disableRipple icon={<i className="fi flaticon-menu" />} label="All Items" />
                        <Tab icon={<i className="fi flaticon-suitcase" />} disableRipple label="Business" />
                        <Tab icon={<i className="fi flaticon-doctor" />} disableRipple label="Health" />
                        <Tab icon={<i className="fi flaticon-edit" />} disableRipple label="Blog" />
                        <Tab icon={<i className="fi flaticon-heart" />} disableRipple label="Wedding" />
                        <Tab icon={<i className="fi flaticon-fork" />} disableRipple label="Restaurent" />
                        <Tab icon={<i className="fi flaticon-rocket" />} disableRipple label="Portfolio" />
                        <Tab icon={<i className="fi flaticon-supermarket" />} disableRipple label="eCommerce" />
                        <Tab icon={<i className="fi flaticon-checklist" />} disableRipple label="Corporate" />
                    </Tabs>
                </Grid>
                {value === 0 && <Fragment>
                    {products.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 1 && <Fragment>
                    {products.slice(1, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 2 && <Fragment>
                    {products.slice(0, 4).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 3 && <Fragment>
                    {products.slice(1, 5).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 4 && <Fragment>
                    {products.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 5 && <Fragment>
                    {products.slice(0, 3).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 6 && <Fragment>
                    {products.slice(3, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 7 && <Fragment>
                    {products.slice(0, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
                {value === 8 && <Fragment>
                    {products.slice(2, 6).map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
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
                    ))}
                </Fragment>}
            </Grid>
        </Grid>
    );
}
export default injectIntl(HomeTwoProduct)
