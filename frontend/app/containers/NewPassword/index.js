import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
// images
import logo from 'images/logo.png';

// components
import Header from 'components/Header/Loadable';
import NewPasswordForm from 'components/NewPasswordForm/Loadable';
import Footer from 'components/Footer/Loadable';

const NewPassword = () => {
  const { token } = useParams();

  return (
    <Fragment>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Header className="headerAreaStyleTwo" logo={logo} />
      <NewPasswordForm token = {token} />
      <Footer />
    </Fragment>
  );
};

export default NewPassword;
