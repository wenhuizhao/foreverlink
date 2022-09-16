import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images
import logo from 'images/logo.png';

// components
import Header from 'components/Header/Loadable';
import ForgetPasswordForm from 'components/ForgetPasswordForm/Loadable';
import Footer from 'components/Footer/Loadable';

const ForgetPassword = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Header className="headerAreaStyleTwo" logo={logo} />
      <ForgetPasswordForm />
      <Footer />
    </Fragment>
  );
};

export default ForgetPassword;
