import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

export default ({ pathname }) => {
  return (
    <Router location={pathname} >
      <Fragment>
        <Header />
        <section className="search_content">
          <div className="search_wrapper"></div>
        </section>
        <section className="content">
          {renderRoutes(Routes)}
        </section>
        <Footer />
      </Fragment>
    </Router>
  );
};