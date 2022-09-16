import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import LoginForm from 'components/LoginForm/Loadable'
import Footer from 'components/Footer/Loadable'

const Login = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <LoginForm />
            <Footer />
        </Fragment>
    );
}

export default Login;
