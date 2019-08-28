import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

export default () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <section>{renderRoutes(Routes)}</section>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};