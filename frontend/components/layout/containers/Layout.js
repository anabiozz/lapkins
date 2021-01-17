import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Footer from '../../common/Footer';
import Header from '../../header/containers/Header';
import Quicklist from '../../quicklist/containers/Quicklist';
// import Breadcrumbs from '../../common/Breadcrumbs';

const Layout = ({children}) => {
  console.log('RENDER <layout>');
  return (
    <Fragment>
      <Header/>
      <Quicklist />
      {/*<section className="breadcrumbs-wrapper">*/}
      {/*  <Breadcrumbs />*/}
      {/*</section>*/}
      <section className="content">
        {children}
      </section>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
