import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Footer from '../../common/components/Footer';
import Header from '../../header/containers/Header';
import Quicklist from '../../quicklist/containers/Quicklist';

const Layout = ({children}) => {
  console.log('RENDER <layout>');
  return (
    <Fragment>
      <Header/>
      <Quicklist />
      <section className="content">
        {children}
      </section>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
