import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import PureBreadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';

export default ({ path }) => {
  return (
    <BrowserRouter>
      <Fragment>

        <Header />
 
        <section className="search_content">
          <div className="search_wrapper">
            {/* <Search /> */}
            {/* <PureBreadcrumbs /> */}
          </div>
        </section>

        <section className="content">
          {renderRoutes(Routes)}
        </section>

        <Footer />

      </Fragment>
    </BrowserRouter>
  );
};