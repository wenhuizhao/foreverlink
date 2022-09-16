import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images
import logo from 'images/logo.png';

// components
import Header from 'components/Header/Loadable';
import MyAccountInfo from 'components/MyAccountInfo/Loadable';
import Footer from 'components/Footer/Loadable';

const MyAccount = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Author</title>
      </Helmet>
      <Header className="headerAreaStyleTwo" logo={logo} />
      <MyAccountInfo />
      <Footer />
    </Fragment>
  );
};

export default MyAccount;
