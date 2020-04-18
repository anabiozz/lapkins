import React, {Fragment} from 'react';
import Header from '../../header/containers/Header';
import Quicklist from '../components/Quicklist';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const Layout = props => {

  console.log('RENDER <Layout>');

  return (
    <Fragment>
    <Header/>
    <Quicklist />
    <section className="content">
      {renderRoutes(props.route.routes)}
    </section>
    <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Layout;
