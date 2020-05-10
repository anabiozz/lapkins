import React from 'react';
import Header from '../../header/containers/Header';
import Quicklist from './Quicklist';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { StateProvider } from '../../../store';

const Layout = props => {

  console.log('RENDER <Layout>');

  return (
    <StateProvider>
      <Header/>
      <Quicklist />
      <section className="content">
        {renderRoutes(props.route.routes)}
      </section>
      <Footer />
    </StateProvider>
  );
};

Layout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Layout;
