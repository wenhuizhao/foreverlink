import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images
import logo from 'images/logo.png';

// components
import Header from 'components/Header/Loadable';
import SignupForm from 'components/SignupForm/Loadable';
import Footer from 'components/Footer/Loadable';

const Signup = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header className="headerAreaStyleTwo" logo={logo} />
      <SignupForm />
      <Footer />
    </Fragment>
  );
};

export default Signup;
