import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Button, TextField } from '@material-ui/core';
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
import axios from 'axios'
import './style.scss'

// images 
import logo from 'images/logo.png'

const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact Us',
    },
]

const contact_info = [
    {
        name: '1065 Rock Ave, San Jose',
        icon: 'fi flaticon-internet',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        label: 'Office Address'
    },
    {
        name: 'info@myforeverlink.com',
        icon: 'fi flaticon-mail',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        label: 'Office Mail'
    },
    {
        name: '+91 256-987-239',
        icon: 'fi flaticon-support',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        label: 'Office Phone'
    },
]

class ContactPage extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        error: {},
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'email can not be Empty';
                        break;
                    case "string.email":
                        err.message = 'email must be a valid email';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        subject: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'Subject can not be Empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        message: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'Message can not be Empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        })
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = async (e) => {
        e.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            const res = await axios
              .post(`${process.env.API_URL}/feedbacks`, {
                feedback: {
                  email: this.state.email,
                  subject: this.state.subject,
                  message: this.state.message,
                },
              });
          toast.success('Successfully Done')
            this.setState({
                email: '',
                subject: '',
                message: '',
            })

        }
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact Us</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title='Contact Us'
                    menus={menus}
                />
                <Grid className="contactInfoArea">
                    <Grid className="container" container spacing={4}>
                        {contact_info.map((info, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="contactInfo">
                                    <h4>{info.name}</h4>
                                    <Grid className="iconInfo">
                                        <i style={{ background: `${info.color}` }} className={info.icon}></i>
                                        <h5>{info.label}</h5>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid className="contactArea">
                    <Grid className="container" spacing={4} container>
                        <Grid md={6} xs={12} item>
                            <form className="contactForm" onSubmit={this.submitHandler}>
                                <h3>Get In Touch</h3>
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.changeHandler}
                                            label="Your Email*"
                                            error={this.state.error.email && true}
                                            helperText={this.state.error.email && this.state.error.email}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="subject"
                                            value={this.state.subject}
                                            onChange={this.changeHandler}
                                            label="Subject"
                                            error={this.state.error.subject && true}
                                            helperText={this.state.error.subject && this.state.error.subject}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.changeHandler}
                                            label="Your Message"
                                            error={this.state.error.message && true}
                                            helperText={this.state.error.message && this.state.error.message}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item className="textCenter" xs={12}>
                                        <Button className="btn" type="submit">Send Message</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid md={6} xs={12} item>
                            <Grid className="googleMap">
                                <Map google={this.props.google} initialCenter={{
                                  lat:37.3933,
                                  lng: -121.9029
                                }} zoom={14}></Map>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </Fragment>
        )
    }

}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBceNl50o3BU6LrsIGJxSL9tKKvqBKIeVs')
})(ContactPage)
